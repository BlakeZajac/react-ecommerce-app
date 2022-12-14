import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create checkout session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["AU"],
        },
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "aud",
              product_data: {
                name: item.title,
                images: ["item.image.data.attributes.formats.thumbnail.url"],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        // Bring people to success/fail page
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
