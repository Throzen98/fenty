describe('Add to cart test on FentyBeauty', () => {
    it('Should visit able to visit the site, then add a product to cart', () => {
        //this command should open the site successfully
        cy.visit("https://fentybeauty.com/");
        // Wait for the cookie modal to appear and be interactive
        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible');
        // Assert modal content
        cy.get('#onetrust-accept-btn-handler').should('contain', 'Accept All Cookies');
        //this command should click on accept ALL Coockies
        cy.get('#onetrust-accept-btn-handler').click();
        //this command should click on continue
        cy.get('.recommendation-modal__message--bold', { timeout: 10000 }).should('be.visible');
        // Wait for the country picker contains proper data
        cy.get('.recommendation-modal__message--bold').should('contain', 'Romania');
        // Assert that the country picker contains proper data
        cy.get('.recommendation-modal__button').click();
        //this command will click on "AccountButton"
        cy.get('#header > div > div.header__inner > div > div.header__icons > ul > li.relative.header__icons-item.header__icons-item--account.header__icons-item--desk > div > a').click();
        //this command will click on Email field and type an correct Email addres
        cy.get('#input-email-login').click().type('testautomation@gmail.com');
        //this command will click on Password field and type an correct password
        cy.get('#input-password-login').click().type('Lasamaodata1@');
        //this command should click on login and successfully let the user logged in
        cy.get('#customer_login > div.form-row.form-row--cta > button').click();
        //this command will hover over the Skincare products
        cy.get('#header > div > div.header__nav > nav > div > ul > li:nth-child(3) > button').trigger('mouseover');
        //this command will add one product from Skincare to CAR

        //this command will click on the bag
        cy.get('#header > div > div.header__inner > div > div.header__icons > ul > li.relative.header__icons-item.header__icons-item--cart').click();
        //this command will assert if price is the same as on the product page
        cy.get('body > section > div.header-cart.z5.active > div.header-cart__footer.absolute > div > div.cart-footer-details__subtotal.f.fw.jcb > p.p1.align-r > span', { timeout: 10000 }).should('be.visible');
        cy.get('body > section > div.header-cart.z5.active > div.header-cart__footer.absolute > div > div.cart-footer-details__subtotal.f.fw.jcb > p.p1.align-r > span').should('contain', '230,00');
        //this command will click on checkout
        cy.get('body > section > div.header-cart.z5.active > div.header-cart__footer.absolute > div > div:nth-child(2) > button').click();
        //this command will insert needed details
        cy.get('.review-block__content').click().type('testautomation@gmail.com');
        cy.get('.review-block__content').click().type('ecaterina varga 6, ap 4 , 400058 Cluj-Napoca CJ, Romania');
        //this command will click on continue to payment
        cy.get('[data-continue-button-content]').click();
        //this command will insert all SHIPPING DETAILS
        cy.get('[data-address-selector]').first().click();
        //this command will type FirstName
        cy.get('#checkout_shipping_address_first_name').click().type('test');
        //this command will type LastName
        cy.get('#checkout_shipping_address_last_name').click().type('Andreeas');
        //this command will type Country/region
        cy.get('#checkout_shipping_address_country').click().type('Romania');
        //this command will type Address
        cy.get('#checkout_shipping_address_address1').click().type('Ecaterina Varga');
        //this command will type Apartment,suite,etc.
        cy.get('#checkout_shipping_address_address2').click().type('4');
        //this command will type Company
        cy.get('#checkout_shipping_address_company').click().type('AndreeasMoontech');
        //this command will type City
        cy.get('#checkout_shipping_address_city').click().type('Cluj-Napoca');
        //this command will type County
        cy.get('#checkout_shipping_address_province').click().type('Cluj');
        //this command will type PostCode
        cy.get('#checkout_shipping_address_zip').click().type('400058');
        //this command will type PhoneNumber
        cy.get('#checkout_shipping_address_phone').click().type('0756 855 292');
        //this command will click on continue to shipping
        cy.get('[data-continue-button-content]').click();
        //this command will click on continue to payment
        cy.get('[data-continue-button-content]').click();
        //this command will click on continue to complete order
        cy.get('[data-continue-button-content]').click();
        //this command will assert all fields validations
        cy.get('#glbe-paymentBox-container > div > div.glbe-payments-msg', { timeout: 10000 }).should('be.visible');
        cy.get('#glbe-paymentBox-container > div > div.glbe-payments-msg').should('contain', 'Please choose payment method');
    })
})


