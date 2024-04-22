import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const CustomeFontIcon = () => {
    return (
        <Icon name='happy' color={"#002080"} size={30}/>
    )
}


export default CustomeFontIcon
