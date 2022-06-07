




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
        cy.get(':nth-child(1) > .css-1qj8w5r > .css-lbx4v1 > .css-1te59mv').click();
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
        cy.get('#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(3) > div > div > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style > h2 > a')
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







describe('testcase3',()=>{
    it('visit ClearTrip page',()=>{
        cy.visit('https://www.cleartrip.com/',{headers: {
                      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                  },
                  timeout: 60000});
    })
    it('login',()=>{
        var username = 'soniajagia329@gmail.com';
        var password = 'Sonia@123';

        cy.get('.to-ellipsis').click();
        cy.get('.bg-secondary-500').click();
        cy.get('.bc-secondary-500 > .d-flex').click();
        cy.get('[data-testid="email"]').type(username);
        cy.get('[data-testid="password"]').type(password);
        cy.get('.bg-secondary-500').click();
        cy.wait(500);
    })
    it('select round trip',()=>{
        //cy.get(':nth-child(2) > .flex-start > .radio__input').check();
        cy.get('#root > div > div > div.container.w-100p.flex-1 > div > div.col-13.homeba.h-fc > div > div.flex.flex-between.flex-middle.px-4.mt-2.mb-4 > label:nth-child(2) > div.flex.flex-column.ml-3.mr-3 > p').click();
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .p-relative > .field').type('Chandigarh');
        cy.wait(500);
        cy.get('.ls-reset > .to-ellipsis').click();
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .p-relative > .field').type('Pune');
        cy.wait(500);
        cy.get('.ls-reset > .to-ellipsis').click();
    })
    it('select depature date',()=>{
        cy.get('.col > .w-100p > :nth-child(1) > .p-relative > :nth-child(1)').click();
        cy.get('[aria-label="Tue Jun 28 2022"] > .Day-grid > .p-1').click();

        //cy.get('.w-100p > :nth-child(1) > .p-relative > :nth-child(2)').click();
        cy.get('[aria-label="Fri Jul 08 2022"] > .Day-grid > .p-1').click();
        cy.get('.col > .px-7').click();
    })
    it('wait a moment',()=>{
        cy.wait(500);
    })
})