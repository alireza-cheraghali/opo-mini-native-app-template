import IcoMoon from "react-icomoon";
import {Path, Svg} from "react-native-svg";
import iconSet from "./selection.json";
import {TIconProps} from "./fontIcon.types";


const FontIcon: TIconProps = ({name, color, size}) => {
    return (
        <IcoMoon
            native
            SvgComponent={Svg}
            PathComponent={Path}
            iconSet={iconSet}
            icon={name}
            color={color}
            size={size}
        />
    )
}


export default FontIcon
