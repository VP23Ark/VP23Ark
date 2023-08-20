
import HomefooterBg from '../../assets/footer_bg.svg'

const HomeFooterStyle = {
    backgroundImage: `url(${HomefooterBg})`,
    //overflow: 'visible',
    height: '106vh' ,// '150vh',
    backgroundSize:'cover',
    display: 'Flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
}

const getFooterStyle = ({ pathname }) => {
    let style = {}
    switch (pathname) {
        case '/':
            style = HomeFooterStyle
            break;
        case '/vision':
            style = {}
            break;
        default:
            style = {}
            break;
    }
    return style

}

export {
    getFooterStyle
}