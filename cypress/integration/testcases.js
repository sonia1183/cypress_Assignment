




describe('testcase1',function(){
    it('visit on google',function(){
        cy.visit(' https://www.google.com/')
    })
    it('search',function(){
        cy.get('input[name="q"]').type('Bajaj FInserv Health Limited{enter}');
        // cy.get('form').submit();
    })
    it('open first web search',()=>{
        cy.get('#search a').should('have.attr', 'href', 'https://www.bajajfinservhealth.in/').contains("Bajaj Finserv Health - Your Personalized Healthcare Platform").click();
    })
    it('search doctor',()=>{
        cy.get('#searchBarInput').type('doctors{enter}');
    })
    it('select first doctor',()=>{
        cy.get(':nth-child(1) > .css-1p6j90k > a > .css-14hwr1e > .css-5glxer > .css-1a5hr2q').click();
    })
    it('click slot',()=>{
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > .flex-column > :nth-child(2) > :nth-child(3) > .slotTimeContainer > :nth-child(2)').click({force : true})
    })
    it('wait for momemt',()=>{
        cy.wait(500);
    })
})






describe('testcase2',()=>{
    it('visit on amazon',()=>{
        cy.visit('https://www.amazon.in');
    })
    it('login',()=>{
        var username='6239518279';
        var password='sonia@123';
        cy.contains('Account & Lists').click();
        cy.get('#ap_email').type(username);
        // cy.get('.a-button-inner > #continue').click();
        cy.get('.auth-validate-form').submit();
        cy.get('#ap_password').type(password);
        // cy.get('#signInSubmit').click();
        cy.get('.auth-validate-form').submit();
    })
    it('dropdown',()=>{
        cy.get('#searchDropdownBox').select('Electronics',{force:true});
        cy.get('#twotabsearchtextbox').type('iphone 12{enter}');
    })
    it('select first item',()=>{
        cy.get('[data-index="2"] > :nth-child(1) > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .s-padding-right-small > .a-size-mini > .a-link-normal')
        .invoke('removeAttr', 'target')
        .click();
    })
    it('add to cart',()=>{
        cy.get('#add-to-cart-button').click();
        cy.get('.a-button-input').click();
    })
    it('go to cart',()=>{
        cy.get("#nav-cart").click();
    })
})








// describe('testcase3',()=>{
//     it('go to MakeMyTrip',()=>{
//         cy.visit('https://www.makemytrip.com/',{headers: {
//           'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
//       },
//       timeout: 60000});
//     })
//     it('login',()=>{
//         let username='soniarani20985@gmail.com';
//         let password='sonia@1970';
//         cy.get('.userSection > [data-cy="account"]').click();
//         cy.get('[data-cy="userName"]').type(username);
//         // cy.get('form').submit();
//         cy.get('[data-cy="continueBtn"]').click();
//         //cy.get('[data-cy="switchLoginFlow"] > a').click();
//         cy.get('[data-cy="password"]').type(password);
//         cy.get('form').submit();
//     })
// })