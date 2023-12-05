interface CarouselItemProps {
   item: {
      id: number;
      title: string;
      author: string;
      image: string;
   };
   currentIndex: number;
}

const CarousselItems: React.FC<CarouselItemProps> = ({
   item,
   currentIndex,
}) => (
   <div
      className={`mx-auto flex flex-col justify-center items-center gap-2 ${
         currentIndex === item.id - 1 ? "" : "hidden"
      }`}
   >
      <img className='max-w-[200px]' src={item.image} alt={item.title} />
      <h3 className='text-2xl font-bold'>{item.title}</h3>
      <p>{item.author}</p>
      <button className='bg-sky-700 rounded-sm text-white py-2 px-4 border-2 hover:bg-white hover:text-sky-700 border-sky-700'>
         <a href='#'>Review</a>
      </button>
   </div>
);

export default CarousselItems;
