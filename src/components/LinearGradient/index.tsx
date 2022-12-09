import { LinearGradient } from 'expo-linear-gradient';

export function LinearGradientColor() {
    return (
        <LinearGradient
            colors={['rgba(250, 250, 250, 0)', '#fafafa']}
            style={{
                position: 'absolute',
                height: 160,
                left: 0,
                right: 0,
                bottom: 0,
            }} />
    );
}
