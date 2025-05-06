import userData from '../fixtures/users/userData.json'
import Login from '../pages/loginPage'
import DashBoard from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myinfoPage';

const loginPage = new Login()
const dashboardPage = new DashBoard()

describe('Login Orange HRM tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  it('Login - Success', () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
})
