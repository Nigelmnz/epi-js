export default class HashTable {
  constructor() {
    this.buckets = new Array(256);
  }

  set(key, value) {
    const keyhash = this.hash(key) % this.buckets.length;
    const bucket = this.findBucket(key);
    if (bucket) {
      bucket.push({ key, value });
    } else {
      this.buckets[keyhash] = [{ key, value }];
    }
  }

  get(key) {
    const bucket = this.findBucket(key);
    if (bucket) {
      const result = bucket.find((k) => k.key === key);
      if (result) {
        return result.value;
      }
    }

    return undefined;
  }

  findBucket(string) {
    const keyhash = this.hash(string) % this.buckets.length;
    return this.buckets[keyhash];
  }

  hash(string) {
    return string.split('').reduce(
      (hash, c) => hash * 31 + c.charCodeAt(0), 3);
  }

  remove(key) {
    const bucket = this.findBucket(key);
    if (bucket) {
      const location = bucket.findIndex((k) => k.key === key);
      if (location !== -1) {
        bucket.splice(location, 1);
      }
    }
  }
}
