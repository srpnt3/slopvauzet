import * as React from "react";
import { cn } from "../util/cn.ts";

function Section({
	title, children, className, action, onAction
}: React.ComponentProps<'section'> & {
	title?: string, action?: string, onAction?: () => void
}) {

	return (
		<section className={cn("flex flex-col gap-2 items-start", className)}>
			<div className={"w-full flex justify-between"}>
				{title && <h2 className={"text-base font-medium"}>{title}</h2>}
				{action && <button onClick={onAction} className={"text-base text-fg2"}>{action}</button>}
			</div>
			<div className={"border-bor border rounded-2 w-full h-full"}>
				{children}
			</div>
		</section>
	);
}

export default Section;