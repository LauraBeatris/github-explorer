import * as Yup from "yup";

import i18n from "translations/i18n";

const locale = {
  mixed: {
    required: i18n.t("yup.mixed_required_field"),
  },
};

Yup.setLocale(locale);

export default Yup;
