export class RepoModel {
    id: string;
    name: string;
    fullName: string;
    description: string;
    forksCount: number;
    starsCount: number;
    watchCount: number;
    href: string;

    constructor(id: string,
                name: string,
                fullName: string,
                description: string,
                forksCount: number,
                starsCount: number,
                href: string,
                watchCount: number) {
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.description = description;
        this.forksCount = forksCount;
        this.starsCount = starsCount;
        this.watchCount = watchCount;
        this.href = href;
    }

}
