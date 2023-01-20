const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  const candidate = findCandidate(event)

  return process(candidate)
};

function findCandidate(event) {
  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event.partitionKey) return typeof event.partitionKey === "string" ? event.partitionKey : JSON.stringify(event.partitionKey);

  return crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
}

function process(candidate) {
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate
}
