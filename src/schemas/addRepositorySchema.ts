import * as yup from "yup";

export const addRepositorySchema = yup.object().shape({
  repositoryName: yup.string().required(),
});
