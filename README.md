Below is the refined and merged README section, with a clear “How It Works” walkthrough suitable for your Fractional Fine Wine GitHub repository:

***

# Fractional Fine Wine

### Project Overview  
Fractional Fine Wine is a platform designed to democratize fine wine. It enables wine enthusiasts to enjoy premium bottles by splitting costs with others at social events. For example, a €100 bottle can be shared among four people at €25 each or five people at €20 each. By making fine wine accessible and social, the platform allows users—called “social somms”—to connect, meet up, and share exceptional bottles by the glass.

### Key Features  
- Create or join wine-sharing events  
- Automated cost-splitting for shared bottles  
- User profiles with preferences and event history  
- Booking and RSVP functionality  
- Build community connections among wine enthusiasts  

### Technology Stack  
- **Frontend:** React with Next.js  
- **Backend:** Node.js with Express.js  
- **Database:** PostgreSQL with Prisma ORM  
- **Authentication:** JWT or OAuth  
- **Payments:** Stripe integration for cost sharing  
- **Hosting:** Vercel (frontend), AWS/DigitalOcean (backend), Supabase/Heroku (database)  

### Setup Instructions  
1. Clone the repository  
   ```bash
   git clone https://github.com/luobotang-uk/social.somm.git
   cd social.somm
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Create a `.env` file with:  
   - Database connection string  
   - Stripe API key  
   - JWT secret or OAuth keys  
4. Run database migrations  
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server  
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser.

### How It Works

Fractional Fine Wine makes sharing fine wine easy and interactive. Here’s how a typical event works:

1. **List a Fine Bottle:**  
   - Any user can list a bottle (e.g., Château Margaux, minimum price €100).  
   - Set the event date, choose home or away (hosted at home or a wine bar), and specify the number of fractions.

2. **Event Page Details:**  
   - The event page displays the wine, event info, famous critic reviews, date, and location.  
   - Other users browse and decide which events to join.

3. **Sign Up and Claim Fractions:**  
   - When a user buys a ticket, one “fraction” of the bottle icon is shaded in.  
   - The buyer’s name appears on their section, visually tracking filled spots.  
   - When all fractions are bought, the event is confirmed.

4. **The Meetup:**  
   - All ticket holders attend at the host’s home or wine bar to enjoy the bottle together.

#### Event Types  
- **Home:** Hosted at a participant’s house.  
- **Away:** Hosted at a wine bar or similar venue.

This process lets users experience world-class wine in a sociable and affordable way, with a clear, visual representation of ownership and participation.

### Business Context  
Fine wine is often exclusive, with high costs as a barrier. Fractional Fine Wine lowers this barrier, turning wine tasting into a social, communal experience. It taps into:  
- The experience economy  
- Rising global interest in premium wines  
- Social discovery in digital platforms  

By combining cost sharing and social connection, Fractional Fine Wine makes fine wine more accessible, memorable, and scalable as a business.

---