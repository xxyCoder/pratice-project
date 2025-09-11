import {COLORS} from "../constants/colors"
import {ClerkProvider} from "@clerk/clerk-expo"
import {tokenCache} from "@clerk/clerk-expo/token-cache"
import {Slot} from "expo-router"
import {SafeAreaView} from "react-native-safe-area-context"

export default function RootLayout() {
	return (
		<ClerkProvider tokenCache={tokenCache}>
			<SafeAreaView style={{flex: 1, backgroundClip: COLORS.background}}>
				<Slot />
			</SafeAreaView>
		</ClerkProvider>
	)
}
