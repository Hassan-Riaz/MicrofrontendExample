import { defaultText } from '../../test1'
import moment from 'moment'
export const getWelcomeString = (name) => {
    return `Welcome ${name} to our project` + defaultText() + moment().format('MMMM Do YYYY, h:mm:ss a');
}