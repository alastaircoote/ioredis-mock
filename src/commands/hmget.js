export function hmget(key, ...fields) {
  return fields.map(field => this.data[key][field] || null);
}
