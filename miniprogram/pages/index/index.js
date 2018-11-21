Page({
    data: {
        isChooseCity: false,
        testArr: []
    },

    chooseCity() {
        this.setData({
            isChooseCity: true
        });
    },

    confirm({ detail }) {
        console.log(detail);
        this.setData({
            city: detail,
            isChooseCity: false
        });
    }
});
