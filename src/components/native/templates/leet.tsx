import { useStateMachine } from 'little-state-machine'
import { updateColor } from '@/lib/ctx/actions'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    PDFViewer,
    Image,
} from '@react-pdf/renderer'

export interface ILeetProps {
    title: string
    address: string
    postcode: string
    name: string
    email: string
    img: string
    phone: string
    city: string
    license: string
    profile: string
    birthdate: undefined | Date
}

export default function Leet({
    title,
    address,
    postcode,
    name,
    email,
    img,
    phone,
    city,
    license,
    birthdate,
    profile,
}: ILeetProps) {
    const { state } = useStateMachine({
        updateColor,
    })

    // Create styles
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 40,
        },
        main: {
            marginTop: 20,
            flexGrow: 1,
            flexDirection: 'row',
        },
        mainLeft: {
            flexDirection: 'column',
            width: '30%',
            gap: 30,
        },
        mainLeftHeading: {
            marginBottom: '5px',
            fontSize: 12,
        },
        mainLeftText: {
            fontSize: 10,
        },
        mainRight: {
            flexDirection: 'column',
            width: '100%',
        },
        mainRightHeading: {
            marginBottom: 5,
        },
        mainRightText: {
            fontSize: 12,
            lineHeight: 1.5,
            letterSpacing: 0.5,
        },
        header: {
            flexDirection: 'row',
        },
        headerInner: {
            backgroundColor: state.color,
            paddingHorizontal: 40,
            paddingVertical: 20,
            height: 160,
            width: '100%',
        },
        headerTitle: {
            fontSize: 30,
        },
        headerBottom: {
            fontSize: 10,
            marginTop: 30,
            flexDirection: 'column',
            gap: '5px',
        },
    })

    /**
     * Parse address data and compose pretty address
     * @returns complete address
     */
    const getLocation = () => {
        let completeAddress = [address, postcode, city]
        return completeAddress
            .filter((seg) => seg.length > 0)
            .map((seg, i, arr) => {
                return arr.length - 1 === i ? seg : `${seg}, `
            })
    }

    const MyDoc = () => {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <View style={styles.headerInner}>
                            <Text style={styles.headerTitle}>{name}</Text>
                            <Text>{title}</Text>
                            <View style={styles.headerBottom}>
                                <Text>{getLocation()}</Text>
                                <Text>{`${phone} · ${email}`}</Text>
                            </View>
                        </View>
                        {img ? (
                            <Image
                                style={{ height: 160, width: 250 }}
                                src={img}
                            />
                        ) : null}
                    </View>
                    <View style={styles.main}>
                        <View style={styles.mainLeft}>
                            {birthdate ? (
                                <View>
                                    <Text style={styles.mainLeftHeading}>
                                        Födelsedatum
                                    </Text>
                                    <Text style={styles.mainLeftText}>
                                        {new Date(
                                            birthdate
                                        ).toLocaleDateString()}
                                    </Text>
                                </View>
                            ) : null}
                            {license ? (
                                <View>
                                    <Text style={styles.mainLeftHeading}>
                                        Körkort
                                    </Text>
                                    <Text style={styles.mainLeftText}>
                                        {license}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                        <View style={styles.mainRight}>
                            {profile ? (
                                <View>
                                    <Text style={styles.mainRightHeading}>
                                        Profil
                                    </Text>
                                    <Text style={styles.mainRightText}>
                                        {profile}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                    </View>
                </Page>
            </Document>
        )
    }

    return (
        <PDFViewer width={'100%'} height={'100%'}>
            <MyDoc />
        </PDFViewer>
    )
}
