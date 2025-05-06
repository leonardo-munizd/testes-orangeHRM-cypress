import userData from '../fixtures/users/userData.json'
import Login from '../pages/loginPage'
import DashBoard from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myinfoPage';

const Chance = require('chance')

const chance = new Chance()
const loginPage = new Login()
const dashboardPage = new DashBoard()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {

  it('user info update - success', () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.acessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(),chance.string(),chance.last())
    myInfoPage.fillemployeeDetails('Employ Id', 'Other Id', 'Drivers Number','2025-07-29')
    myInfoPage.saveForm()
    myInfoPage.fillStatus()


  })
})
