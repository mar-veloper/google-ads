import { capitalize } from '../../helper';

export default {
  changeModelVal(val, key, sec, modelVal) {
    const value = sec !== 'paths' ? capitalize(val.trim()) : val.trim();
    this.$emit('update:modelValue', {
      ...modelVal,
      [key]: value,
    });
  },
};
