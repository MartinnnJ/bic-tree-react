import BicTreeCategory from '@components/BicTreeCategory';
import initData from '@/data/init.json';

export default function App() {
  const hierarchyData = initData['hierarchy'];

  return (
    <div className="container">
      {hierarchyData.map(category => {
        return (
          <BicTreeCategory
            key={category.id}
            slug={category.slug}
            title={category.title}
          />
        )
      })}
    </div>
  )
}