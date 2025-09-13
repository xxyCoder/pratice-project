import {COLORS} from "@/constants/colors"
import {FC, PropsWithChildren} from "react"
import {View} from "react-native"
import {useSafeAreaInsets} from "react-native-safe-area-context"

const SafeScreen: FC<PropsWithChildren> = ({children}) => {
	const insets = useSafeAreaInsets()
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.background,
				paddingTop: insets.top,
			}}>
			{children}
		</View>
	)
}

export default SafeScreen
