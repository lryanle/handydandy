import { TabsContent } from "@/components/ui/tabs";
import Gallery from "@/components/gallery";
import { getTags } from "@/lib/utils";

export default function ToolGallery() {
	return (
		<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div className="px-4 py-6 sm:px-0">
				<div>
					<TabsContent
						key="All"
						value="All"
						className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
					>
						<Gallery tag="All" />
					</TabsContent>
					{getTags().map((tag) => (
						<TabsContent
							key={tag}
							value={tag}
							className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
						>
							<Gallery tag={tag} />
						</TabsContent>
					))}
				</div>
			</div>
		</div>
	);
}
