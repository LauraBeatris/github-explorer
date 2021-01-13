import Yup from "config/yup";

export const addRepositorySchema = Yup.object().shape({
  repositoryName: Yup.string().required(),
});
