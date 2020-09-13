import chalk from 'chalk';

type TeardownTask = (() => void) | (() => Promise<void>);

class Teardown {

	private tasks: Array<TeardownTask> = [];

	public register(task: TeardownTask): void {
		this.tasks.push(task);
	}

	public async run(...reasons: Array<string>): Promise<void> {
		try {
			if (reasons.length) {
				console.log(`${chalk.red('Server is shuting down. Because:')} ${reasons.join('\n')}`);
			}
			await Promise.allSettled(this.tasks);
		} finally {
			process.exit(1);
		}
	}


}

export default Teardown;
