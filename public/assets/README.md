# Assets Folder Structure

This folder contains all the static assets for the Deko Elektrik website.

## Folder Structure

```
public/assets/
├── images/
│   ├── slider/          # Main page slider images
│   ├── products/        # Product images
│   ├── logos/           # Company and partner logos
│   └── icons/           # Custom icons and graphics
└── README.md           # This file
```

## Usage Guidelines

### Slider Images

- **Location**: `/assets/images/slider/`
- **Recommended size**: 1920x1080px (16:9 aspect ratio)
- **Format**: JPG or WebP for best performance
- **File naming**: `slide1.jpg`, `slide2.jpg`, `slide3.jpg`, etc.

### Product Images

- **Location**: `/assets/images/products/`
- **Recommended size**: 800x800px (1:1 aspect ratio) for thumbnails, 1200x1200px for detailed views
- **Format**: JPG or WebP
- **File naming**: Use descriptive names like `kablo-grup-1.jpg`

### Logos

- **Location**: `/assets/images/logos/`
- **Format**: SVG preferred, PNG with transparent background as fallback
- **Include**: Company logo, partner logos, certification logos

### Icons

- **Location**: `/assets/images/icons/`
- **Format**: SVG preferred for scalability
- **Size**: 24x24px, 32x32px, 48x48px variants

## Image Optimization Tips

1. Use Next.js Image component for automatic optimization
2. Compress images before uploading
3. Use modern formats like WebP when possible
4. Provide alt text for accessibility
5. Consider lazy loading for better performance

## Current Slider Configuration

The slider is configured to display 3 slides with the following content:

1. "Kaliteli Elektrik Malzemeleri"
2. "Profesyonel Çözümler"
3. "25 Yıllık Tecrübe"

To update slider content, edit the `slides` array in `/app/components/Slider.js`.
