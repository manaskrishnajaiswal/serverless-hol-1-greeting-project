exports.handler = async (event) => {
    // Log the incoming event for debugging purposes
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Extract the name from the event body
    const body = event.body;
    const name = body.name || "World";

    // Create a greeting message
    const message = `Hello, ${name}! Welcome to our serverless application!`;

    // Return the response
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    };
}