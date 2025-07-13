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

// Merged mockData.js with all properties combined
export const mockProducts = [
  {
    id: 'DT001',
    name: 'Organic Wheat Flour',
    sku: 'WF-001',
    uniqueId: 'UNQ-WF-001-2024-001',
    category: 'Food',
    status: 'At Store',
    location: 'Mumbai Store A',
    temperature: 22.5,
    humidity: 45,
    verified: true,
    supplier: 'GreenFields Farm',
    manufactureDate: '2024-01-15',
    expiryDate: '2024-07-15',
    batchNumber: 'WF2024001',
    batch: 'WF2024001',
    quality: 94,
    certifications: ['USDA Organic', 'ISO 22000', 'FSSAI Certified'],
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef01',
    created: '2024-01-15T08:00:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'GreenFields Farm, Punjab', timestamp: '2024-01-15T08:00:00Z', temp: 25, humidity: 40 },
      { stage: 'Processing', location: 'GreenFields Farm, Punjab', timestamp: '2024-01-16T10:30:00Z', temp: 24.5, humidity: 42 },
      { stage: 'Transit', location: 'Highway to Delhi', timestamp: '2024-01-17T09:00:00Z', temp: 23.0, humidity: 44 },
      { stage: 'Distribution', location: 'Delhi Distribution Center', timestamp: '2024-01-18T14:20:00Z', temp: 22.8, humidity: 43 },
      { stage: 'Store', location: 'Mumbai Store A', timestamp: '2024-01-21T16:00:00Z', temp: 22.5, humidity: 45 }
    ],
    history: [
      {
        timestamp: '2024-01-15T08:00:00Z',
        event: 'Manufacturing Started',
        location: 'GreenFields Farm, Punjab',
        details: 'Organic wheat processed and packaged',
        temperature: 25.0,
        humidity: 40
      },
      {
        timestamp: '2024-01-16T10:30:00Z',
        event: 'Quality Check Passed',
        location: 'GreenFields Farm, Punjab',
        details: 'All quality parameters within acceptable range',
        temperature: 24.5,
        humidity: 42
      },
      {
        timestamp: '2024-01-17T09:00:00Z',
        event: 'Shipped to Distributor',
        location: 'Highway to Delhi',
        details: 'Loaded onto transport vehicle TV-2024-001',
        temperature: 23.0,
        humidity: 44
      },
      {
        timestamp: '2024-01-18T14:20:00Z',
        event: 'Arrived at Distribution Center',
        location: 'Delhi Distribution Center',
        details: 'Unloaded and stored in warehouse section A-12',
        temperature: 22.8,
        humidity: 43
      },
      {
        timestamp: '2024-01-20T11:45:00Z',
        event: 'Shipped to Store',
        location: 'Highway to Mumbai',
        details: 'Loaded for final delivery to retail location',
        temperature: 22.5,
        humidity: 45
      },
      {
        timestamp: '2024-01-21T16:00:00Z',
        event: 'Delivered to Store',
        location: 'Mumbai Store A',
        details: 'Successfully delivered and placed in inventory',
        temperature: 22.5,
        humidity: 45,
        status: 'At Store'
      }
    ]
  },
  {
    id: 'DT002',
    name: 'Fresh Milk',
    sku: 'ML-002',
    uniqueId: 'UNQ-ML-002-2024-002',
    category: 'Dairy',
    status: 'Return Pending',
    location: 'Mumbai Store B',
    temperature: 4.2,
    humidity: 85,
    verified: true,
    supplier: 'DairyFresh Co.',
    manufactureDate: '2024-01-20',
    expiryDate: '2024-01-25',
    batchNumber: 'ML2024002',
    batch: 'ML2024002',
    quality: 89,
    certifications: ['FDA Approved', 'ISO 22000', 'Organic'],
    blockchainHash: '0x2b3c4d5e6f7890abcdef02',
    created: '2024-01-20T06:00:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'DairyFresh Co., Pune', timestamp: '2024-01-20T06:00:00Z', temp: 4.0, humidity: 85 },
      { stage: 'Processing', location: 'DairyFresh Co., Pune', timestamp: '2024-01-20T14:30:00Z', temp: 4.1, humidity: 84 },
      { stage: 'Transit', location: 'Highway to Mumbai', timestamp: '2024-01-21T07:00:00Z', temp: 4.0, humidity: 85 },
      { stage: 'Store', location: 'Mumbai Store B', timestamp: '2024-01-21T12:00:00Z', temp: 4.2, humidity: 85 }
    ],
    returnInfo: {
      id: 'RET-1705834567890',
      productId: 'DT002',
      productName: 'Fresh Milk',
      productSku: 'ML-002',
      uniqueId: 'UNQ-ML-002-2024-002',
      customerId: 'cust001',
      customerName: 'John Doe',
      reason: 'Expired product',
      description: 'The milk was already expired when purchased. Expiry date was 2024-01-25 but it was purchased on 2024-01-26.',
      timestamp: '2024-01-26T10:30:00Z',
      status: 'Pending Review',
      estimatedProcessingTime: '3-5 business days'
    },
    history: [
      {
        timestamp: '2024-01-20T06:00:00Z',
        event: 'Manufacturing Started',
        location: 'DairyFresh Co., Pune',
        details: 'Fresh milk processed and packaged',
        temperature: 4.0,
        humidity: 85
      },
      {
        timestamp: '2024-01-20T14:30:00Z',
        event: 'Quality Check Passed',
        location: 'DairyFresh Co., Pune',
        details: 'All quality parameters within acceptable range',
        temperature: 4.1,
        humidity: 84
      },
      {
        timestamp: '2024-01-21T07:00:00Z',
        event: 'Shipped to Store',
        location: 'Highway to Mumbai',
        details: 'Loaded onto refrigerated transport vehicle RV-2024-002',
        temperature: 4.0,
        humidity: 85
      },
      {
        timestamp: '2024-01-21T12:00:00Z',
        event: 'Delivered to Store',
        location: 'Mumbai Store B',
        details: 'Successfully delivered and placed in refrigerated section',
        temperature: 4.2,
        humidity: 85,
        status: 'At Store'
      },
      {
        timestamp: '2024-01-26T10:30:00Z',
        event: 'Return Initiated',
        location: 'Customer Location',
        details: 'Return initiated by John Doe. Reason: Expired product',
        returnId: 'RET-1705834567890',
        status: 'Returned'
      }
    ]
  },
  {
    id: 'DT003',
    name: 'Basmati Rice',
    sku: 'RC-003',
    uniqueId: 'UNQ-RC-003-2024-003',
    category: 'Food',
    status: 'In Transit',
    location: 'Delhi Distribution Center',
    temperature: 25.0,
    humidity: 50,
    verified: true,
    supplier: 'Royal Grains Ltd.',
    manufactureDate: '2024-01-10',
    expiryDate: '2025-01-10',
    batchNumber: 'RC2024003',
    batch: 'RC2024003',
    quality: 96,
    certifications: ['ISO 22000', 'FSSAI Certified', 'Export Quality'],
    blockchainHash: '0x3c4d5e6f7890abcdef03',
    created: '2024-01-10T09:00:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'Royal Grains Ltd., Haryana', timestamp: '2024-01-10T09:00:00Z', temp: 26, humidity: 48 },
      { stage: 'Processing', location: 'Royal Grains Ltd., Haryana', timestamp: '2024-01-11T11:00:00Z', temp: 25.5, humidity: 49 },
      { stage: 'Transit', location: 'Highway to Delhi', timestamp: '2024-01-12T08:30:00Z', temp: 25.2, humidity: 50 },
      { stage: 'Distribution', location: 'Delhi Distribution Center', timestamp: '2024-01-13T15:45:00Z', temp: 25.0, humidity: 50 }
    ],
    history: [
      {
        timestamp: '2024-01-10T09:00:00Z',
        event: 'Manufacturing Started',
        location: 'Royal Grains Ltd., Haryana',
        details: 'Premium basmati rice processed and packaged',
        temperature: 26.0,
        humidity: 48
      },
      {
        timestamp: '2024-01-11T11:00:00Z',
        event: 'Quality Check Passed',
        location: 'Royal Grains Ltd., Haryana',
        details: 'All quality parameters within acceptable range',
        temperature: 25.5,
        humidity: 49
      },
      {
        timestamp: '2024-01-12T08:30:00Z',
        event: 'Shipped to Distributor',
        location: 'Highway to Delhi',
        details: 'Loaded onto transport vehicle TV-2024-003',
        temperature: 25.2,
        humidity: 50
      },
      {
        timestamp: '2024-01-13T15:45:00Z',
        event: 'Arrived at Distribution Center',
        location: 'Delhi Distribution Center',
        details: 'Unloaded and stored in warehouse section B-08',
        temperature: 25.0,
        humidity: 50,
        status: 'In Transit'
      }
    ]
  },
  {
    id: 'DT004',
    name: 'Olive Oil',
    sku: 'OO-004',
    uniqueId: 'UNQ-OO-004-2024-004',
    category: 'Food',
    status: 'At Store',
    location: 'Mumbai Store C',
    temperature: 23.0,
    humidity: 40,
    verified: true,
    supplier: 'Mediterranean Oils',
    manufactureDate: '2024-01-05',
    expiryDate: '2026-01-05',
    batchNumber: 'OO2024004',
    batch: 'OO2024004',
    quality: 97,
    certifications: ['Extra Virgin', 'Organic', 'EU Certified'],
    blockchainHash: '0x4d5e6f7890abcdef04',
    created: '2024-01-05T10:00:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'Mediterranean Oils, Italy', timestamp: '2024-01-05T10:00:00Z', temp: 22, humidity: 38 },
      { stage: 'Processing', location: 'Mediterranean Oils, Italy', timestamp: '2024-01-06T12:00:00Z', temp: 22.5, humidity: 39 },
      { stage: 'Import', location: 'Mumbai Port', timestamp: '2024-01-10T09:00:00Z', temp: 24, humidity: 42 },
      { stage: 'Store', location: 'Mumbai Store C', timestamp: '2024-01-15T14:00:00Z', temp: 23, humidity: 40 }
    ],
    history: [
      {
        timestamp: '2024-01-05T10:00:00Z',
        event: 'Manufacturing Started',
        location: 'Mediterranean Oils, Italy',
        details: 'Extra virgin olive oil processed and bottled',
        temperature: 22.0,
        humidity: 38
      },
      {
        timestamp: '2024-01-06T12:00:00Z',
        event: 'Quality Check Passed',
        location: 'Mediterranean Oils, Italy',
        details: 'All quality parameters within acceptable range',
        temperature: 22.5,
        humidity: 39
      },
      {
        timestamp: '2024-01-10T09:00:00Z',
        event: 'Imported to India',
        location: 'Mumbai Port',
        details: 'Cleared customs and imported successfully',
        temperature: 24.0,
        humidity: 42
      },
      {
        timestamp: '2024-01-15T14:00:00Z',
        event: 'Delivered to Store',
        location: 'Mumbai Store C',
        details: 'Successfully delivered and placed in inventory',
        temperature: 23.0,
        humidity: 40,
        status: 'At Store'
      }
    ]
  },
  {
    id: 'DT005',
    name: 'Organic Honey',
    sku: 'HN-005',
    uniqueId: 'UNQ-HN-005-2024-005',
    category: 'Food',
    status: 'Manufacturing',
    location: 'BeeHive Farms, Kerala',
    temperature: 28.0,
    humidity: 60,
    verified: true,
    supplier: 'BeeHive Farms',
    manufactureDate: '2024-01-22',
    expiryDate: '2026-01-22',
    batchNumber: 'HN2024005',
    batch: 'HN2024005',
    quality: 93,
    certifications: ['Organic', 'Raw Honey', 'FSSAI Certified'],
    blockchainHash: '0x5e6f7890abcdef05',
    created: '2024-01-22T07:00:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'BeeHive Farms, Kerala', timestamp: '2024-01-22T07:00:00Z', temp: 28, humidity: 60 }
    ],
    history: [
      {
        timestamp: '2024-01-22T07:00:00Z',
        event: 'Manufacturing Started',
        location: 'BeeHive Farms, Kerala',
        details: 'Organic honey extraction and processing initiated',
        temperature: 28.0,
        humidity: 60,
        status: 'Manufacturing'
      }
    ]
  },
  {
    id: 'DT006',
    name: 'Organic Tomatoes',
    sku: 'TOM-ORG-006',
    uniqueId: 'UNQ-TOM-ORG-006-2024-006',
    category: 'Produce',
    status: 'In Transit',
    location: 'Transport Hub Delhi',
    temperature: 4.2,
    humidity: 85,
    verified: true,
    supplier: 'GreenFarms Ltd',
    manufactureDate: '2024-07-08',
    expiryDate: '2024-07-20',
    batchNumber: 'BTH-2024-006',
    batch: 'BTH-2024-006',
    quality: 95,
    certifications: ['USDA Organic', 'ISO 22000'],
    blockchainHash: '0x6f7890abcdef06',
    created: '2024-07-10T08:30:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'Punjab, India', timestamp: '2024-07-08T06:00:00Z', temp: 25, humidity: 70 },
      { stage: 'Storage', location: 'Cold Storage Delhi', timestamp: '2024-07-09T14:00:00Z', temp: 4, humidity: 85 },
      { stage: 'Transit', location: 'Transport Hub Delhi', timestamp: '2024-07-10T08:30:00Z', temp: 4.2, humidity: 85 }
    ],
    history: [
      {
        timestamp: '2024-07-08T06:00:00Z',
        event: 'Harvested',
        location: 'Punjab, India',
        details: 'Organic tomatoes harvested from farm',
        temperature: 25.0,
        humidity: 70
      },
      {
        timestamp: '2024-07-09T14:00:00Z',
        event: 'Cold Storage',
        location: 'Cold Storage Delhi',
        details: 'Stored in controlled environment',
        temperature: 4.0,
        humidity: 85
      },
      {
        timestamp: '2024-07-10T08:30:00Z',
        event: 'In Transit',
        location: 'Transport Hub Delhi',
        details: 'Loaded for delivery to stores',
        temperature: 4.2,
        humidity: 85,
        status: 'In Transit'
      }
    ]
  },
  {
    id: 'DT007',
    name: 'Free Range Chicken',
    sku: 'CHK-FR-007',
    uniqueId: 'UNQ-CHK-FR-007-2024-007',
    category: 'Meat',
    status: 'At Store',
    location: 'Walmart Store #1245',
    temperature: 2.1,
    humidity: 90,
    verified: true,
    supplier: 'Heritage Poultry',
    manufactureDate: '2024-07-07',
    expiryDate: '2024-07-14',
    batchNumber: 'BTH-2024-007',
    batch: 'BTH-2024-007',
    quality: 92,
    certifications: ['Free Range Certified', 'HACCP'],
    blockchainHash: '0x7890abcdef07',
    created: '2024-07-09T10:15:00Z',
    image: '/api/placeholder/300/200',
    journey: [
      { stage: 'Farm', location: 'Haryana, India', timestamp: '2024-07-07T05:00:00Z', temp: 28, humidity: 65 },
      { stage: 'Processing', location: 'Processing Plant Delhi', timestamp: '2024-07-08T12:00:00Z', temp: 15, humidity: 80 },
      { stage: 'Storage', location: 'Cold Storage Mumbai', timestamp: '2024-07-09T09:00:00Z', temp: 2, humidity: 90 },
      { stage: 'Store', location: 'Walmart Store #1245', timestamp: '2024-07-10T07:00:00Z', temp: 2.1, humidity: 90 }
    ],
    history: [
      {
        timestamp: '2024-07-07T05:00:00Z',
        event: 'Processed',
        location: 'Haryana, India',
        details: 'Free range chicken processed',
        temperature: 28.0,
        humidity: 65
      },
      {
        timestamp: '2024-07-08T12:00:00Z',
        event: 'Quality Check Passed',
        location: 'Processing Plant Delhi',
        details: 'All quality parameters within acceptable range',
        temperature: 15.0,
        humidity: 80
      },
      {
        timestamp: '2024-07-09T09:00:00Z',
        event: 'Cold Storage',
        location: 'Cold Storage Mumbai',
        details: 'Stored in controlled environment',
        temperature: 2.0,
        humidity: 90
      },
      {
        timestamp: '2024-07-10T07:00:00Z',
        event: 'Delivered to Store',
        location: 'Walmart Store #1245',
        details: 'Successfully delivered and placed in inventory',
        temperature: 2.1,
        humidity: 90,
        status: 'At Store'
      }
    ]
  }
];

export const mockUsers = {
  customer: {
    id: 'CUST001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210'
  },
  supplier: {
    id: 'SUPP001',
    name: 'GreenFields Farm',
    email: 'contact@greenfields.com',
    phone: '+91 9876543211'
  },
  vendor: {
    id: 'VEND001',
    name: 'Mumbai Store A',
    email: 'store.a@mumbai.com',
    phone: '+91 9876543212'
  },
  logistics: {
    id: 'LOG001',
    name: 'SwiftLogistics',
    email: 'ops@swiftlogistics.com',
    phone: '+91 9876543213'
  }
};

export const mockReturnHistory = [
  {
    id: 'RET-1705834567890',
    productId: 'DT002',
    productName: 'Fresh Milk',
    productSku: 'ML-002',
    uniqueId: 'UNQ-ML-002-2024-002',
    customerId: 'cust001',
    customerName: 'John Doe',
    reason: 'Expired product',
    description: 'The milk was already expired when purchased.',
    timestamp: '2024-01-26T10:30:00Z',
    status: 'Pending Review',
    verificationResult: {
      isAuthentic: true,
      verificationId: 'VER-1705834567891',
      digitalTwinMatch: true,
      blockchainVerified: true,
      temperatureHistory: true,
      locationHistory: true,
      confidenceScore: 95
    },
    estimatedProcessingTime: '3-5 business days'
  }
];