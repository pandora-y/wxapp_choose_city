Page({
    data: {
        isChooseCity: false
    },

    onLoad: function() {},

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
