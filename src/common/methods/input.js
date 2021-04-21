import { capitalize } from '../../helper';

export default {
  changeModelVal(val, key, sec, modelVal) {
    const value =
      sec !== 'paths'
        ? capitalize(val.trimStart().replaceAll(/\s+/g, ' '))
        : val.trimStart().replaceAll(/\s+/g, ' ');
    this.$emit('update:modelValue', {
      ...modelVal,
      [key]: value,
    });
  },
};
