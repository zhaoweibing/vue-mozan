const fillIn = {
  state: {
    isAddAddress: false,
    showAll: false,
    uninvoiceStyle: false,
    invoiceStyle: true,
    modify: false,
    whoseAddress: null,
    addresses: [
      {
        id: "n111",
        name: "阿不来提 · 阿不都热西提",
        province: "河北省",
        city: "秦皇岛市",
        area: "海港区",
        addressDetailed: "秦海路84号",
        telephone: "15130376662",
        isLiActive: false,
        isDefault: false,
        isDelAddress: false
      },
      {
        id: "n222",
        name: "阿不来提 · 石运好",
        province: "河北省",
        city: "秦皇岛市",
        area: "海港区",
        addressDetailed: "秦海路85号",
        telephone: "15130376662",
        isLiActive: false,
        isDefault: true,
        isDelAddress: false
      },
      {
        id: "n333",
        name: "阿不来提 · 石不好",
        province: "河北省",
        city: "秦皇岛市",
        area: "海港区",
        addressDetailed: "秦海路86号",
        telephone: "15130376662",
        isLiActive: true,
        isDefault: false,
        isDelAddress: false
      },
      {
        id: "n334333",
        name: "阿不来提 · 石好好",
        province: "河北省",
        city: "秦皇岛市",
        area: "海港区",
        addressDetailed: "秦海路87号",
        telephone: "15130376662",
        isLiActive: false,
        isDefault: false,
        isDelAddress: false
      },
      {
        id: "n334563",
        name: "阿不来提 · 石好不好",
        province: "河北省",
        city: "秦皇岛市",
        area: "海港区",
        addressDetailed: "秦海路88号",
        telephone: "15130376662",
        isLiActive: false,
        isDefault: false,
        isDelAddress: false
      }
    ],
    havName: false,
    havPhoneNum: false,
    havWhere: false,
    havDetail: false,
    havDefault: false,
    //
    name: "",
    phoneNum: "",
    detailAddress: "",
    alias: ""
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName;
    },
    changePhoneNum(state, newPhoneNum) {
      state.phoneNum = newPhoneNum;
    },
    changeDetailAddress(state, newDetailAddress) {
      state.detailAddress = newDetailAddress;
    },
    changeAlias(state, newAlias) {
      state.alias = newAlias;
    },

    //
    changeDelAddress(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      nowDel.isDelAddress = !nowDel.isDelAddress;
    },
    changeDefault(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isDefault === true);
      oldDefault.isDefault = !oldDefault.isDefault;
      nowDel.isDefault = !nowDel.isDefault;
    },
    changeLiactive(state, payload) {
      const nowDel = state.addresses.find(item => item.id === payload.id);
      const oldDefault = state.addresses.find(item => item.isLiActive === true);
      oldDefault.isLiActive = !oldDefault.isLiActive;
      nowDel.isLiActive = !nowDel.isLiActive;
    },
    delLiAddress(state, payload) {
      state.addresses = state.addresses.filter(item => item.id != payload.id);
    },
    addAddress(state) {
      state.isAddAddress = !state.isAddAddress;
    },
    changeShow(state) {
      state.showAll = !state.showAll;
    },
    uninvoice(state) {
      state.uninvoiceStyle = true;
      state.invoiceStyle = false;
    },
    invoice(state) {
      state.uninvoiceStyle = false;
      state.invoiceStyle = true;
    },
    addDefault(state) {
      state.havDefault = !state.havDefault;
    },
    addNewAddress(state, payload) {
      const addNew = {
        id: "sdasda",
        name: state.name,
        telephone: state.phoneNum,
        province: payload.province,
        city: payload.city,
        area: payload.area,
        addressDetailed: state.detailAddress + "(" + state.alias + ")",
        isLiActive: false,
        isDefault: state.havDefault,
        isDelAddress: false
      };
      if (state.name === "") {
        state.havName = !state.havName;
      } else if (state.phoneNum === "") {
        state.havPhoneNum = !state.havPhoneNum;
      } else if (
        payload.province === "" &&
        payload.city === "" &&
        payload.area === ""
      ) {
        state.havWhere = !state.havWhere;
      } else if (state.detailAddress === "") {
        state.havDetail = !state.havDetail;
      } else if (
        state.name != "" &&
        state.phoneNum != "" &&
        payload.province != "" &&
        payload.city != "" &&
        payload.area != "" &&
        state.detailAddress != ""
      ) {
        state.addresses.push(addNew);
        const oldDefault = state.addresses.find(
          item => item.isDefault === true
        );
        oldDefault.isDefault = false;
        state.isAddAddress = !state.isAddAddress;
        state.havName = false;
        state.havPhoneNum = false;
        state.havWhere = false;
        state.havDetail = false;
      }
    },
    modifyNewAddress(state, payload) {
      const oidDrtail = state.addresses.find(item => item.isDefault === true);
      const addNew = {
        id: state.whoseAddress.id,
        name: state.name,
        telephone: state.phoneNum,
        province: payload.province || state.whoseAddress.province,
        city: payload.city || state.whoseAddress.city,
        area: payload.area || state.whoseAddress.area,
        addressDetailed: state.detailAddress + "(" + state.alias + ")",
        isLiActive: false,
        isDefault: state.havDefault,
        isDelAddress: false
      };
      if (addNew.name === "") {
        addNew.havName = !addNew.havName;
      } else if (addNew.phoneNum === "") {
        addNew.havPhoneNum = !addNew.havPhoneNum;
      } else if (
        addNew.province === "" &&
        addNew.city === "" &&
        addNew.area === ""
      ) {
        addNew.havWhere = !addNew.havWhere;
      } else if (addNew.detailAddress === "") {
        addNew.havDetail = !addNew.havDetail;
      } else if (
        addNew.name != "" &&
        addNew.phoneNum != "" &&
        addNew.province != "" &&
        addNew.city != "" &&
        addNew.area != "" &&
        addNew.detailAddress != ""
      ) {
        if (oidDrtail.id === addNew.id) {
          const changeWho = state.addresses.find(item => item.id === addNew.id);
          changeWho.id = addNew.id;
          changeWho.name = addNew.name;
          changeWho.province = addNew.province;
          changeWho.city = addNew.city;
          changeWho.area = addNew.area;
          changeWho.addressDetailed = addNew.addressDetailed;
          changeWho.telephone = addNew.telephone;
          changeWho.isLiActive = addNew.isLiActive;
          changeWho.isDefault = true;
          changeWho.isDelAddress = addNew.isDelAddress;
          state.havName = false;
          state.havPhoneNum = false;
          state.havWhere = false;
          state.havDetail = false;
        } else {
          if (addNew.isDefault === true) {
            oidDrtail.isDefault = false;
          }
          const changeWho = state.addresses.find(item => item.id === addNew.id);

          changeWho.id = addNew.id;
          changeWho.name = addNew.name;
          changeWho.province = addNew.province;
          changeWho.city = addNew.city;
          changeWho.area = addNew.area;
          changeWho.addressDetailed = addNew.addressDetailed;
          changeWho.telephone = addNew.telephone;
          changeWho.isLiActive = addNew.isLiActive;
          changeWho.isDefault = addNew.isDefault;
          changeWho.isDelAddress = addNew.isDelAddress;
          state.havName = false;
          state.havPhoneNum = false;
          state.havWhere = false;
          state.havDetail = false;
        }
        state.modify = !state.modify;
      }
    },
    changeModify(state, payload) {
      state.modify = !state.modify;
      state.whoseAddress = state.addresses.find(item => item.id === payload.id);
      state.name = state.whoseAddress.name;
      state.phoneNum = state.whoseAddress.telephone;
      state.detailAddress = state.whoseAddress.addressDetailed;
    },
    coloseModify(state) {
      state.modify = !state.modify;
    }
  },
  actions: {},
  getters: {
    addressesShow(state) {
      return state.addresses.slice(0, 3);
    },
    needToPays(state, getters, rootState) {
      const havGoods = rootState.checkgoods.shopCarts.filter(
        item => item.status === "on"
      );
      return havGoods.filter(item => item.isCheck === true);
    },
    payGoodInfo(state, getters) {
      const payNum = getters.needToPays.length;
      const payPrice = getters.needToPays.reduce((res, item) => {
        return (res = res + item.price * item.num);
      }, 0);
      const payDiscount = 100;
      const payFreight = 10;
      const payMoney = payPrice - payDiscount + payFreight;
      const payInfo = {
        id: "asudyoaisu",
        num: payNum,
        price: payPrice.toFixed(2),
        discount: payDiscount.toFixed(2),
        freight: payFreight.toFixed(2),
        money: payMoney.toFixed(2)
      };
      return payInfo;
    }
  }
};
export default fillIn;
