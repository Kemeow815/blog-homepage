import { cn } from "@/lib/utils";

import * as React from "react";

const Textarea = ({ ref, className, ...props }: React.ComponentProps<"textarea"> & { ref?: React.RefObject<HTMLTextAreaElement | null> }) => {
	return (
		<textarea
			className={cn(
				"flex min-h-[80px] w-full rounded-md border border-input bg-[#ffffff] dark:bg-[#121212] px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
};
Textarea.displayName = "Textarea";

export { Textarea };
