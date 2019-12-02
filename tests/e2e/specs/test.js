// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    // 访问 http://localhost:8080/#/
    cy.visit('/')
    // 找到内容为 'ShoppingCart Example' 的 div 并点击
    // ps：ShoppingCart Example 是一个链接
    cy.contains('ShoppingCart Example').click()
  })
})

// https://blog.csdn.net/qq_39300332/article/details/81197503
// E2E（End To End）即端对端测试，属于黑盒测试，通过编写测试用例，自动化模拟用户操作，确保组件间通信正常，程序流数据传递如预期
