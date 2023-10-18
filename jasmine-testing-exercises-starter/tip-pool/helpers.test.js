describe("Helpers.js", function () {
    beforeEach(function () {
        billAmtInput.value = 100
        tipAmtInput.value = 20
        submitPaymentInfo()
    });

    describe("sumPaymentTotal()", function () {
        it("should return tip and bill totals as well as average tip percent", function () {
            let tipTotal = sumPaymentTotal('tipAmt')
            let billTotal = sumPaymentTotal('billAmt')
            let tipPercent = sumPaymentTotal('tipPercent')
            expect(tipTotal).toEqual(20)
            expect(billTotal).toEqual(100)
            expect(tipPercent).toEqual(20)

            billAmtInput.value = 100
            tipAmtInput.value = 20
            submitPaymentInfo()

            tipTotal = sumPaymentTotal('tipAmt')
            billTotal = sumPaymentTotal('billAmt')
            tipPercent = sumPaymentTotal('tipPercent')
            expect(tipTotal).toEqual(40)
            expect(billTotal).toEqual(200)
            expect(tipPercent).toEqual(40)
        })
    })

    describe("calculateTipPercent", function () {
        it("should calculate the percent by dividing the bill by the tip", function () {
            let returnTip = calculateTipPercent(100, 15)
            expect(returnTip).toEqual(15)
        })
        it("should return a rounded whole number percent", function () {
            let returnTip = calculateTipPercent(100, 15)
            expect(returnTip).toMatch(/\d{1,2}/)
        })
    })

    describe("appendTd()", function (){
        it("should return a td with the correct inner text", function () {
            let newTr = document.createElement('tr')
            let newValue = 100
            appendTd(newTr, newValue)
            expect(newTr.children.length).toEqual(1)
            expect(newTr.firstChild.innerHTML).toEqual('100')
        })
    })

    describe("appendDeleteBtn()", function () {
        it("should add a button with the value of X to the row", function () {
            let newTr = document.createElement('tr')
            appendDeleteBtn(newTr)
            expect(newTr.lastChild.innerText).toEqual('X')
        })
    })

    afterEach( function () {
        allPayments = {}
        paymentId = 0
    })
})