describe("Payments.js", function () {
    beforeEach(function () {
        billAmtInput.value = 100
        tipAmtInput.value = 20
    });

    describe("submitPaymentInfo()", function() {
        it("should add to allPayments", function () {
            submitPaymentInfo()
            expect(Object.keys(allPayments).length).toEqual(1)
        })

        it("should clear the inputs", function () {
            submitPaymentInfo()
            expect(billAmtInput.value).toEqual("")
            expect(tipAmtInput.value).toEqual("")
        })
    })

    describe("createCurPayment()", function () {
        it("should return a payment object", function () {
            let returnObject = createCurPayment()
            expect(returnObject.billAmt).toEqual('100')
            expect(returnObject.tipAmt).toEqual('20')
            expect(returnObject.tipPercent).toEqual(20)
        })

        it("should not return a payment object when either inputs are empty", function () {
            billAmtInput.value = ''
            let returnObject = createCurPayment()
            expect(returnObject).not.toBeDefined()
            billAmtInput.value = '100'
            tipAmtInput.value = ''
            returnObject = createCurPayment()
            expect(returnObject).not.toBeDefined()
        })
    })

    describe("appendPaymentTable()", function() {
        it("should add a row to #paymentTable", function() {
            let returnObject = createCurPayment()
            appendPaymentTable(returnObject)
            let newRow = document.querySelectorAll('#paymentTable tbody tr td')
            expect(newRow[0].innerText).toEqual("$100")
            expect(newRow[1].innerText).toEqual("$20")
            expect(newRow[2].innerText).toEqual("20%")
        })
    })

    describe("updateSummary()", function() {
        it("should calculate the tip percent average", function() {
            allPayments = {payment0: {billAmt: 300, tipAmt: 60, tipPercent: 20}}
            updateSummary()
            expect(summaryTds[0].innerHTML).toEqual('$300')
            expect(summaryTds[1].innerHTML).toEqual('$60')
            expect(summaryTds[2].innerHTML).toEqual('20%')
        })
    })

    afterEach(function () {
        paymentTbody.innerText = ''
        allPayments = {}
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        paymentId = 0
        // document.querySelector("#summaryTable tbody").innerHTML = "<tr><td></td><td></td><td></td></tr>"
    })
})