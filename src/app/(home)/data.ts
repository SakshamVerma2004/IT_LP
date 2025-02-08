import { StaticImageData } from 'next/image'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar7 from '@/assets/images/team/avatar-7.jpg'

type AboutUsType = {
  title: string
  icon: string
  description: string
}

type ServicesType = {
  icon: string
  title: string
  description: string
  options: number
}

type TeamType = {
  image: StaticImageData
  name: string
  description: string
  role: string
}
export type PricingType = {
  title: string
  price: number
  discount: number
  isPopular?: boolean
  description: string
  packs: string[]
}

export const aboutUsData: AboutUsType[] = [
  {
    title: 'Strategy Innovations',
    description: 'We help you define a clear vision and roadmap for your business. Our comprehensive strategic planning services',
    icon: 'tabler:brand-codepen',
  },
  {
    title: 'Personalized Solutions',
    description: 'Our team of seasoned professionals provides strategic advice and practical insights, helping you make informed.',
    icon: 'tabler:hours-24',
  },
  {
    title: 'Digital Design',
    description: 'We create responsive and user-friendly websites that provide an exceptional online experience, tailored to your brand.',
    icon: 'tabler:device-desktop',
  },
  {
    title: 'Subscription',
    description: 'Make your money analysis faster and create your own way of saving on payments negotiate bills and subscriptions',
    icon: 'tabler:file-description',
  },
]

export const servicesData: ServicesType[] = [
  {
    icon: 'tabler:brand-asana',
    title: 'Project Management',
    description: 'Planning is a critical phase where project managers develop detailed plans',
    options: 30,
  },
  {
    icon: 'tabler:pencil-discount',
    title: 'Web & Mobile Development',
    description: 'Native mobile app development involves creating applications development',
    options: 40,
  },
  {
    icon: 'tabler:24-hours',
    title: 'Customer Support',
    description: 'We provide best team and 25/7 full services Contact with chat and call',
    options: 4,
  },
  {
    icon: 'tabler:user',
    title: 'Human Resource',
    description: 'Recruitment involves attracting and identifying qualified candidates',
    options: 22,
  },
  {
    icon: 'tabler:artboard',
    title: 'Design & Creative',
    description: 'Graphic design involves the creation of visual content to communicate',
    options: 19,
  },
  {
    icon: 'tabler:currency',
    title: 'Marketing & Communication',
    description: 'Brand management involves creating, maintaining, and enhancing',
    options: 20,
  },
  {
    icon: 'tabler:briefcase',
    title: 'Business Development',
    description: 'Market research helps identify emerging opportunities, customer',
    options: 22,
  },
  {
    icon: 'tabler:briefcase',
    title: 'Business Development',
    description: 'Market research helps identify emerging opportunities, customer',
    options: 22,
  },
]

export const teamData: TeamType[] = [
  {
    image: avatar3,
    name: 'John A. Raub',
    description: "I've established pagedone in 2022 and it was one of the best idea I've had...",
    role: 'Founder',
  },
  {
    image: avatar1,
    name: 'Nora R. White',
    description: 'The journey has been marked by forging meaningful partnerships...',
    role: 'Co-Founder',
  },
  {
    image: avatar2,
    name: 'Laura A. Hatton',
    description: "Every step of the way, we've embraced challenges as opportunities...",
    role: 'Manager',
  },
  {
    image: avatar5,
    name: 'Gary E. Newman',
    description: 'This venture represents not only a leap of faith but also a profound...',
    role: 'Sales Lead',
  },
  {
    image: avatar6,
    name: 'Lorri N. Croft',
    description: 'Effective teams communicate openly, leverage strengths, and...',
    role: 'Designer',
  },
  {
    image: avatar7,
    name: 'Corey J. Comea',
    description: 'This venture represents not only a leap of faith but also a profound...',
    role: 'Team Leader',
  },
]

export const pricingData: PricingType[] = [
  {
    title: 'Starter',
    price: 12.99,
    discount: 20,
    description: 'Offering a free plan allows companies to showcase the value and effectiveness of their service.',
    packs: ['Account Aggregation', ' Expense Tracking', 'Budgeting Tools', 'Transaction Insights', 'Basic Security'],
  },
  {
    title: 'Team',
    price: 46.99,
    discount: 30,
    isPopular: true,
    description: 'We offer a variety of pricing plans designed to suit different needs and budgets.',
    packs: ['Everything in Free', 'Customizable Dashboards', 'Advanced Budgeting', 'Investment Tracking', 'Enhanced Security'],
  },
  {
    title: 'Business',
    price: 79.99,
    discount: 40,
    description: 'We offer a range of pricing plans tailored to meet the diverse needs of businesses of all sizes.',
    packs: [' Financial Planning Tools', 'Priority Support', 'Budgeting Tools', 'Premium Widgets', 'Advanced Security'],
  },
]
