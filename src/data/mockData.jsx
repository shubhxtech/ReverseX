import { 
  Shield, 
  Package, 
  Users, 
  Truck, 
  CheckCircle, 
  AlertTriangle, 
  QrCode, 
  Upload, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  MapPin, 
  Thermometer, 
  Droplets, 
  Award, 
  Clock, 
  BarChart3, 
  Download, 
  Bell, 
  Settings, 
  LogOut,
  Home,
  Scan,
  FileText,
  Target,
  Globe,
  Moon,
  Sun
} from 'lucide-react';

export const mockProducts = [
  {
    id: 'DT001',
    name: 'Organic Tomatoes',
    sku: 'TOM-ORG-001',
    batch: 'BTH-2024-001',
    category: 'Produce',
    supplier: 'GreenFarms Ltd',
    quality: 95,
    status: 'In Transit',
    location: 'Transport Hub Delhi',
    temperature: 4.2,
    humidity: 85,
    certifications: ['USDA Organic', 'ISO 22000'],
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef',
    created: '2024-07-10T08:30:00Z',
    journey: [
      { stage: 'Farmស, Farm', location: 'Punjab, India', timestamp: '2024-07-08T06:00:00Z', temp: 25, humidity: 70 },
      { stage: 'Storage', location: 'Cold Storage Delhi', timestamp: '2024-07-09T14:00:00Z', temp: 4, humidity: 85 },
      { stage: 'Transit', location: 'Transport Hub Delhi', timestamp: '2024-07-10T08:30:00Z', temp: 4.2, humidity: 85 }
    ],
    image: '/api/placeholder/300/200'
  },
  {
    id: 'DT002',
    name: 'Free Range Chicken',
    sku: 'CHK-FR-002',
    batch: 'BTH-2024-002',
    category: 'Meat',
    supplier: 'Heritage Poultry',
    quality: 92,
    status: 'At Store',
    location: 'Walmart Store #1245',
    temperature: 2.1,
    humidity: 90,
    certifications: ['Free Range Certified', 'HACCP'],
    blockchainHash: '0x2b3c4d5e6f7890abcdef12',
    created: '2024-07-09T10:15:00Z',
    journey: [
      { stage: 'Farm', location: 'Haryana, India', timestamp: '2024-07-07T05:00:00Z', temp: 28, humidity: 65 },
      { stage: 'Processing', location: 'Processing Plant Delhi', timestamp: '2024-07-08T12:00:00Z', temp: 15, humidity: 80 },
      { stage: 'Storage', location: 'Cold Storage Mumbai', timestamp: '2024-07-09T09:00:00Z', temp: 2, humidity: 90 },
      { stage: 'Store', location: 'Walmart Store #1245', timestamp: '2024-07-10T07:00:00Z', temp: 2.1, humidity: 90 }
    ],
    image: '/api/placeholder/300/200'
  },
  {
    id: 'DT003',
    name: 'Dairy Milk',
    sku: 'MLK-DRY-003',
    batch: 'BTH-2024-003',
    category: 'Dairy',
    supplier: 'Pure Dairy Co.',
    quality: 98,
    status: 'Quality Check',
    location: 'Quality Lab Mumbai',
    temperature: 3.8,
    humidity: 95,
    certifications: ['FDA Approved', 'ISO 22000', 'Organic'],
    blockchainHash: '0x3c4d5e6f7890abcdef1234',
    created: '2024-07-11T05:45:00Z',
    journey: [
      { stage: 'Farm', location: 'Gujarat, India', timestamp: '2024-07-10T04:00:00Z', temp: 26, humidity: 75 },
      { stage: 'Processing', location: 'Dairy Plant Gujarat', timestamp: '2024-07-10T16:00:00Z', temp: 4, humidity: 95 },
      { stage: 'Quality Check', location: 'Quality Lab Mumbai', timestamp: '2024-07-11T05:45:00Z', temp: 3.8, humidity: 95 }
    ],
    image: '/api/placeholder/300/200'
  }
];

export const mockUsers = {
  customer: { id: 'CUST001', name: 'Raj Patel', email: 'raj.patel@email.com' },
  supplier: { id: 'SUPP001', name: 'GreenFarms Ltd', email: 'contact@greenfarms.com' },
  vendor: { id: 'VEND001', name: 'Walmart Store Manager', email: 'manager@walmart.com' },
  logistics: { id: 'LOG001', name: 'FastTrack Logistics', email: 'ops@fasttrack.com' }
};