import {useState} from "react"
import {
	Alert,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import {useSignUp} from "@clerk/clerk-expo"
import {useRouter} from "expo-router"
import VerifyEmail from "./verify-email"
import {authStyles} from "@/assets/styles/auth.styles"
import {Image} from "expo-image"
import {COLORS} from "../../constants/colors"
import {Ionicons} from "@expo/vector-icons"

export default function SignUpScreen() {
	const {isLoaded, signUp} = useSignUp()
	const router = useRouter()

	const [emailAddress, setEmailAddress] = useState("")
	const [password, setPassword] = useState("")
	const [pendingVerification, setPendingVerification] = useState(false)
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const handleSignUp = async () => {
		if (!emailAddress || !password)
			return Alert.alert("Error", "Please fill in all fields")
		if (password.length < 6)
			return Alert.alert("Error", "Password must be at least 6 characters")

		if (!isLoaded) return

		setLoading(true)

		try {
			await signUp.create({emailAddress, password})

			await signUp.prepareEmailAddressVerification({strategy: "email_code"})

			setPendingVerification(true)
		} catch (err: any) {
			Alert.alert(
				"Error",
				err.errors?.[0]?.message || "Failed to create account"
			)
			console.error(JSON.stringify(err, null, 2))
		} finally {
			setLoading(false)
		}
	}

	if (pendingVerification)
		return (
			<VerifyEmail
				email={emailAddress}
				onBack={() => setPendingVerification(false)}
			/>
		)

	return (
		<View style={authStyles.container}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
				style={authStyles.keyboardView}>
				<ScrollView
					contentContainerStyle={authStyles.scrollContent}
					showsVerticalScrollIndicator={false}>
					{/* Image Container */}
					<View style={authStyles.imageContainer}>
						<Image
							source={require("../../assets/images/i2.png")}
							style={authStyles.image}
							contentFit="contain"
						/>
					</View>

					<Text style={authStyles.title}>Create Account</Text>

					<View style={authStyles.formContainer}>
						{/* Email Input */}
						<View style={authStyles.inputContainer}>
							<TextInput
								style={authStyles.textInput}
								placeholder="Enter email"
								placeholderTextColor={COLORS.textLight}
								value={emailAddress}
								onChangeText={setEmailAddress}
								keyboardType="email-address"
								autoCapitalize="none"
							/>
						</View>

						{/* Password Input */}
						<View style={authStyles.inputContainer}>
							<TextInput
								style={authStyles.textInput}
								placeholder="Enter password"
								placeholderTextColor={COLORS.textLight}
								value={password}
								onChangeText={setPassword}
								secureTextEntry={!showPassword}
								autoCapitalize="none"
							/>
							<TouchableOpacity
								style={authStyles.eyeButton}
								onPress={() => setShowPassword(!showPassword)}>
								<Ionicons
									name={showPassword ? "eye-outline" : "eye-off-outline"}
									size={20}
									color={COLORS.textLight}
								/>
							</TouchableOpacity>
						</View>

						{/* Sign Up Button */}
						<TouchableOpacity
							style={[
								authStyles.authButton,
								loading && authStyles.buttonDisabled,
							]}
							onPress={handleSignUp}
							disabled={loading}
							activeOpacity={0.8}>
							<Text style={authStyles.buttonText}>
								{loading ? "Creating Account..." : "Sign Up"}
							</Text>
						</TouchableOpacity>

						{/* Sign In Link */}
						<TouchableOpacity
							style={authStyles.linkContainer}
							onPress={() => router.back()}>
							<Text style={authStyles.linkText}>
								Already have an account?{" "}
								<Text style={authStyles.link}>Sign In</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	)
}
