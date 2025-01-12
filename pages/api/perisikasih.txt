export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      clientId,
      chainId,
      userOp: { sender, targets, gasLimit, gasPrice, data },
    } = req.body;

    // Debug log to inspect incoming data
    console.log("Incoming request:", req.body);

    // Example logic to decide if the transaction is allowed
    let isAllowed = true;
    let reason = "BON VOYAGE! 🚀";

    // Custom rules
    if (!clientId || typeof clientId !== "string") {
      isAllowed = false;
      reason = "Invalid clientId.";
    } else if (!chainId || typeof chainId !== "number") {
      isAllowed = false;
      reason = "Invalid chainId.";
    } else if (!sender || typeof sender !== "string") {
      isAllowed = false;
      reason = "Sender address is missing.";
    } else if (!Array.isArray(targets) || targets.length === 0) {
      isAllowed = false;
      reason = "No target addresses specified.";
    } else if (BigInt(gasLimit) > BigInt(1_000_000)) {
      isAllowed = false;
      reason = "Gas limit exceeds the maximum allowed.";
    }

    // More advanced checks (e.g., validate the target contracts)
    if (isAllowed) {
      // Example: Disallow specific contracts
      const disallowedTargets = ["0x123...", "0x456..."]; // Replace with actual addresses
      const hasDisallowedTarget = targets.some((target) =>
        disallowedTargets.includes(target.toLowerCase())
      );

      if (hasDisallowedTarget) {
        isAllowed = false;
        reason = "Transaction targets a restricted contract.";
      }
    }

    // Respond with the decision
    res.status(200).json({
      isAllowed,
      reason: isAllowed ? undefined : reason, // Optional field if allowed
    });
  } else {
    // Reject non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
