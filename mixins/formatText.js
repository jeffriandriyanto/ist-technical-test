import moment from "moment";
moment.locale("id");

function priceFormat(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts[0];
}

const formatText = {
  filters: {
    dateFormat: value => {
      if (!value) return "-";
      return moment(value).format("DD MMM YYYY");
    },
    dateTimeFormat: value => {
      if (!value) return "-";
      return moment(value).format("DD MMM YYYY, HH:mm");
    },
    timeFormat: value => {
      if (!value) return "-";
      return moment(value).format("HH:mm");
    },
    numberFormat: value => {
      if (!value) return "0";
      return priceFormat(value);
    },
    genderFormat: value => {
      if (!value) return "-";
      return value === "L" ? "Laki - Laki" : "Perempuan";
    }
  },
}

export default formatText;