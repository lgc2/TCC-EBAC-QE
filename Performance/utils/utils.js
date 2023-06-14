export default class Utils {
    static getBaseUrl() {
        switch (process.env.NODE_ENV) {
            case 'production':
                return `http://lojaebac.ebaconline.art.br`
        }
    }
}