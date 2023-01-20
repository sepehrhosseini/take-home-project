const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  describe("When given no input", () => {
    it("Returns the literal '0'", () => {
      const trivialKey = deterministicPartitionKey();
      expect(trivialKey).toBe("0");
    });
  })

  describe("When the partition key is string", () => {
    it("Returns the partition key param, with no change", () => {
      const trivialKey = deterministicPartitionKey({ partitionKey: 'some input' });
      expect(trivialKey).toBe("some input");
    });
  })

  describe("When the partition key is NOT string", () => {
    it("Returns the partition key param stringified", () => {
      const trivialKey = deterministicPartitionKey({ partitionKey: { input: 'any' } });
      expect(trivialKey).toBe(JSON.stringify({ input: 'any' }));
    });
  })

  describe("When there's no partition key param", () => {
    it("Returns the whole input object as hash", () => {
      const trivialKey = deterministicPartitionKey({ input: 'any' });
      expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify({ input: 'any' })).digest("hex"));
    });
  })

  describe("When the partition key is longer than 256 chars", () => {
    it("Returns a hash of the partition key", () => {
      const partitionKey = crypto.randomBytes(250).toString('hex').substr(0, 260)

      const trivialKey = deterministicPartitionKey({ partitionKey });
      expect(trivialKey).toBe(crypto.createHash("sha3-512").update(partitionKey).digest("hex"));

    })
  })

  describe("When the partition key is NOT longer than 256 chars", () => {
    it("Returns a hash of the partition key", () => {
      const partitionKey = crypto.randomBytes(250).toString('hex').substr(0, 200)

      const trivialKey = deterministicPartitionKey({ partitionKey });
      expect(trivialKey).toBe(partitionKey);

    })
  })
});
