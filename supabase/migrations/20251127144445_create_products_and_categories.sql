/*
  # Create Leeds Collection E-commerce Schema
  
  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text) - Category name (Women, Men, Kids, Footwear, Bags)
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Category description
      - `image_url` (text) - Category display image
      - `display_order` (integer) - Order for display
      - `created_at` (timestamptz)
      
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key)
      - `name` (text) - Product name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Product description
      - `price` (decimal) - Price in KSH
      - `images` (jsonb) - Array of image URLs
      - `sizes` (jsonb) - Available sizes array
      - `colors` (jsonb) - Available colors array
      - `is_new_arrival` (boolean) - Featured as new arrival
      - `is_featured` (boolean) - Featured on homepage
      - `stock_status` (text) - in_stock, out_of_stock, limited
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Public read access for all products and categories
    - No write access (admin only through service role)
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL,
  images jsonb DEFAULT '[]'::jsonb,
  sizes jsonb DEFAULT '[]'::jsonb,
  colors jsonb DEFAULT '[]'::jsonb,
  is_new_arrival boolean DEFAULT false,
  is_featured boolean DEFAULT false,
  stock_status text DEFAULT 'in_stock',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);