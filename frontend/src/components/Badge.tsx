import * as React from "react";
import { cn } from "../util/cn.ts";

function Badge({ className, children, ...props }: React.ComponentProps<'span'> & {}) {
	return (
		<span style={{textOverflow: "ellipsis \"...\"" }} className={cn("py-1 px-2 h-6 rounded-2 font-medium text-xs max-w-48 truncate", className)} {...props}>
			{children}
		</span>
	);
}

export default Badge;