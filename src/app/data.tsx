
export type mediaData ={
      platform: string;
      username: string,
      followers: number|string;
      changeToday: number|string;
      type: string;
      updown:string;
      icon: string;
      color: string;

}

export const socialMediaAccounts:mediaData[] = [
    {
      platform: "Facebook",
      username: "@nathanf",
      followers: 1987,
      changeToday: 12,
      type: "FOLLOWERS",
      updown:"/up.svg",
      icon: "/facebook.svg",
      color: "Facebook"
    },
    {
      platform: "twitter",
      username: "@nathanf",
      followers: 1044,
      changeToday: 99,
      type: "FOLLOWERS",
      updown:"/up.svg",
      icon: "/twitter.svg",
      color: "Twitter"
    },
    {
      platform: "Instagram",
      username: "@realnathanf",
      followers: "11k",
      changeToday: 1099,
      type: "FOLLOWERS",
      updown:"/up.svg",
      icon: "/instagram.svg",
      color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
    },
    {
      platform: "YouTube",
      username: "Nathan F.",
      followers: 8239,
      changeToday: 144,
      type: "SUBSCRIBERS",
      updown:"/down.svg",
      icon: "/youtube.svg",
      color: "YouTube"
    },
  ];

const overviewData = [
    { name: "Page Views", value: 87, change: "3%", icon: "/facebook.svg", color: "Facebook" },  // Facebook
    { name: "Likes", value: 52, change: "2%", icon: "/facebook.svg", color: "Facebook" },  // Facebook
    { name: "Likes", value: 5462, change: "2257%", icon: "/instagram.svg", color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) " },  // Instagram
    { name: "Profile Views", value: "52k", change: "1375%", icon: "/instagram.svg", color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%)) " },  // Instagram
    { name: "Likes", value: 507, change: "553%", icon: "/twitter.svg", color: "Twitter" },  // Twitter
    { name: "Retweets", value: 117, change: "303%", icon: "/twitter.svg", color: "Twitter" },  // Twitter
    { name: "Likes", value: 107, change: "19%", icon: "/youtube.svg", color: "YouTube" },  // YouTube
    { name: "Total Views", value: 1407, change: "12%", icon: "/youtube.svg", color: "YouTube" },  // YouTube
  ];
  