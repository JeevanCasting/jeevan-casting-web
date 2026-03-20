const ProductCard1 = ({ title, description, image, category }) => {
  return (
    <div className="mx-3">
      <div className="relative rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105
                      border-sm border-[var(--brand-secondary)] border 
                      bg-gradient-to-br from-yellow-400/10 via-[var(--brand-accent)]/5 to-transparent backdrop-blur-sm p-6">
        
        {/* Image Container */}
        {image && (
          <div className="relative h-48 w-full overflow-hidden rounded-sm mb-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 to-transparent"></div>
          </div>
        )}
 {/* Title */}
        <h3 className="text-xl font-bold text-[var(--brand-secondary)]">{title}</h3>

        {/* Category */}
        {category && (
          <span className="text-xs font-semibold text-[var(--brand-secondary)] uppercase tracking-wider  mb-2">
            {category}
          </span>
        )}

       
        {/* Description */}
        <p className="text-gray-200 text-sm leading-relaxed text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard1;
