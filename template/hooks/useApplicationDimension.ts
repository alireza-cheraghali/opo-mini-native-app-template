import {ScaledSize, StatusBar, useWindowDimensions} from "react-native";

const useApplicationDimension=():ScaledSize=>{
    const {height,width,scale,fontScale}=useWindowDimensions()
    return {
        width,
        height:height+(StatusBar?.currentHeight || 0),
        scale,
        fontScale
    }
}

export default useApplicationDimension