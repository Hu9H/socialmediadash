
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
export type overviewData = {
    platform: string;
    type: string;
    value: number|string;
    percentage: number;
    icon: string;
    
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
      color: "hsl(208, 92%, 53%)"
    },
    {
      platform: "twitter",
      username: "@nathanf",
      followers: 1044,
      changeToday: 99,
      type: "FOLLOWERS",
      updown:"/up.svg",
      icon: "/twitter.svg",
      color: "hsl(203, 89%, 53%)"
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
      color: "hsl(348, 97%, 39%)"
    },
  ];

export const overviewTodayData:overviewData[] = [
    { platform: "Facebook",type: "Page Views", value: 87, percentage: 3, icon: "/facebook.svg" },  // Facebook
    { platform: "Facebook",type: "Likes", value: 52, percentage: 2, icon: "/facebook.svg" },  // Facebook
    {platform: "Instagram", type: "Likes", value: 5462, percentage: 2257, icon: "/instagram.svg" },  // Instagram
    {platform: "Instagram", type: "Profile Views", value: "52k", percentage: 1375, icon: "/instagram.svg" },  // Instagram
    {platform: "Twitter", type: "Likes", value: 507, percentage: 553, icon: "/twitter.svg"},  // Twitter
    {platform: "Twitter", type: "Retweets", value: 117, percentage: 303, icon: "/twitter.svg"},  // Twitter
    {platform: "YouTube", type: "Likes", value: 107, percentage: -19, icon: "/youtube.svg"},  // YouTube
    {platform: "YouTube", type: "Total Views", value: 1407, percentage: -12, icon: "/youtube.svg"},  // YouTube
  ];
  