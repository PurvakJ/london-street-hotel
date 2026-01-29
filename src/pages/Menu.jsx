// src/pages/Menu.jsx
import { useState } from 'react';
import Hero from '../components/Hero';

const Menu = () => {
  const [selectedMenuImage, setSelectedMenuImage] = useState(null);

  const menuItems = [
    {
      category: "Breakfast",
      description: "Start your day with our delightful morning offerings",
      icon: "🥐",
      items: [
        { 
          name: "Continental Breakfast", 
          description: "Assortment of fresh pastries, seasonal fruits, Greek yogurt, granola, and premium coffee selection", 
          price: "$24",
          image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
        },
        { 
          name: "Evani Signature Omelette", 
          description: "Three-egg omelette with spinach, mushrooms, cherry tomatoes, goat cheese, and fresh herbs", 
          price: "$28",
          image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80"
        },
        { 
          name: "Avocado Toast", 
          description: "Sourdough toast with smashed avocado, poached eggs, microgreens, and chili flakes", 
          price: "$22",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
        },
        { 
          name: "French Toast", 
          description: "Brioche French toast with maple syrup, fresh berries, and whipped cream", 
          price: "$20",
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=2047&q=80"
        }
      ]
    },
    {
      category: "Lunch",
      description: "Midday delights to satisfy your cravings",
      icon: "🍽️",
      items: [
        { 
          name: "Grilled Salmon", 
          description: "Atlantic salmon with lemon butter sauce, asparagus, and roasted baby potatoes", 
          price: "$36",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
        },
        { 
          name: "Truffle Pasta", 
          description: "Handmade fettuccine with black truffle, parmesan cream sauce, and fresh herbs", 
          price: "$32",
          image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
        },
        { 
          name: "Caesar Salad", 
          description: "Classic Caesar with grilled chicken, parmesan crisp, and house-made dressing", 
          price: "$26",
          image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80"
        },
        { 
          name: "Wagyu Burger", 
          description: "Premium Wagyu beef patty with truffle aioli, aged cheddar, and brioche bun", 
          price: "$28",
          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2099&q=80"
        }
      ]
    },
    {
      category: "Dinner",
      description: "Evening culinary masterpieces",
      icon: "🍷",
      items: [
        { 
          name: "Filet Mignon", 
          description: "8oz premium beef tenderloin with red wine reduction, garlic mashed potatoes, and seasonal vegetables", 
          price: "$48",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        { 
          name: "Lobster Thermidor", 
          description: "Maine lobster baked with creamy white wine sauce, gruyere cheese, and herbs", 
          price: "$56",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        { 
          name: "Vegetable Wellington", 
          description: "Seasonal vegetables, wild mushrooms, and goat cheese in puff pastry with red wine sauce", 
          price: "$34",
          image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        },
        { 
          name: "Roasted Duck", 
          description: "Crisp duck breast with cherry glaze, potato gratin, and sautéed greens", 
          price: "$42",
          image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
      ]
    },
    {
      category: "Desserts",
      description: "Sweet endings to perfect your meal",
      icon: "🍰",
      items: [
        { 
          name: "Chocolate Soufflé", 
          description: "Warm dark chocolate soufflé with vanilla bean ice cream and raspberry coulis", 
          price: "$18",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80"
        },
        { 
          name: "Crème Brûlée", 
          description: "Classic vanilla bean crème brûlée with caramelized sugar crust", 
          price: "$16",
          image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
        },
        { 
          name: "New York Cheesecake", 
          description: "Classic cheesecake with berry compote and mint garnish", 
          price: "$15",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80"
        },
        { 
          name: "Tiramisu", 
          description: "Traditional Italian tiramisu with mascarpone cream and espresso-soaked ladyfingers", 
          price: "$16",
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        }
      ]
    }
  ];

  // Hard menu images
  const hardMenuImages = [
    {
      id: 1,
      title: "Main Dining Room Menu",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      fullImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Rooftop Bar Menu",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      fullImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Wine List",
      thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      fullImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Seasonal Specials",
      thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      fullImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
    },
    {
        id: 5,
        title: "Main Dining Room Menu",
        thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 6,
        title: "Rooftop Bar Menu",
        thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 7,
        title: "Wine List",
        thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 8,
        title: "Seasonal Specials",
        thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        fullImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
      },
      {
        id: 9,
        title: "Main Dining Room Menu",
        thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 10,
        title: "Rooftop Bar Menu",
        thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 11,
        title: "Wine List",
        thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 12,
        title: "Seasonal Specials",
        thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        fullImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
      },
      {
        id: 13,
        title: "Main Dining Room Menu",
        thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 14,
        title: "Rooftop Bar Menu",
        thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 15,
        title: "Wine List",
        thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        fullImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      },
      {
        id: 16,
        title: "Seasonal Specials",
        thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
        fullImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
      }
  ];

// Update the openImageModal and closeImageModal functions in Menu.jsx

const openImageModal = (image) => {
    setSelectedMenuImage(image);
    // Add modal-open class to body
    document.body.classList.add('modal-open');
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  };
  
  const closeImageModal = () => {
    setSelectedMenuImage(null);
    // Remove modal-open class from body
    document.body.classList.remove('modal-open');
    // Restore scrolling
    document.body.style.overflow = 'auto';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.height = '';
  };

  return (
    <>
      <Hero 
        title="Restaurant & Bar" 
        subtitle="Exquisite culinary experiences crafted by our master chefs"
        showButton={false}
      />

      {/* Menu Categories Section */}
      <section className="section menu-categories-section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Discover culinary excellence in every bite</p>
          
          <div className="menu-layout">
            {/* Main Menu Content */}
            <div className="menu-content">
              {menuItems.map((category, index) => (
                <div key={index} className="menu-category">
                  <div className="category-header">
                    <div className="category-icon">{category.icon}</div>
                    <div>
                      <h3 className="category-title">{category.category}</h3>
                      <p className="category-description">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="menu-items-grid">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="menu-item-card">
                        <div className="menu-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="menu-item-details">
                          <div className="menu-item-header">
                            <h4 className="menu-item-name">{item.name}</h4>
                            <span className="menu-item-price">{item.price}</span>
                          </div>
                          <p className="menu-item-description">{item.description}</p>
                          <div className="menu-item-rating">⭐⭐⭐⭐⭐</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Hard Menu Sidebar */}
            <div className="menu-sidebar">
              <div className="hard-menu-section">
                <h3 className="sidebar-title">Hard Copy Menus</h3>
                <p className="sidebar-subtitle">Click to view full menu</p>
                
                <div className="hard-menu-grid">
                  {hardMenuImages.map((menu) => (
                    <div 
                      key={menu.id} 
                      className="hard-menu-card"
                      onClick={() => openImageModal(menu)}
                    >
                      <div className="hard-menu-image">
                        <img src={menu.thumbnail} alt={menu.title} />
                        <div className="hard-menu-overlay">
                          <span className="view-text">View Full Menu</span>
                        </div>
                      </div>
                      <h4 className="hard-menu-title">{menu.title}</h4>
                    </div>
                  ))}
                </div>

                <div className="menu-notes">
                  <h4>Menu Notes</h4>
                  <ul>
                    <li>⭐ Gluten-free options available</li>
                    <li>⭐ Vegan and vegetarian options marked</li>
                    <li>⭐ All prices include tax</li>
                    <li>⭐ Seasonal ingredients may vary</li>
                    <li>⭐ 18% service charge applies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedMenuImage && (
  <div 
    className="image-modal-overlay" 
    onClick={closeImageModal}
    onTouchStart={(e) => {
      // Close on double tap for mobile
      if (e.touches.length === 2) {
        closeImageModal();
      }
    }}
  >
    <div 
      className="image-modal-content" 
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className="close-modal-btn" 
        onClick={closeImageModal}
        aria-label="Close menu image"
      >
        ×
      </button>
      <img 
        src={selectedMenuImage.fullImage} 
        alt={selectedMenuImage.title} 
        loading="lazy"
      />
      <div className="image-modal-title">{selectedMenuImage.title}</div>
    </div>
  </div>
)}
    </>
  );
};

export default Menu;