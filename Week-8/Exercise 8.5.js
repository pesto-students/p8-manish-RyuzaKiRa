/* 
 * Problem 8.5: Find the Town Judge
 * In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
 * 
 * If the town judge exists, then:
 *  1. The town judge trusts nobody.
 *  2. Everybody (except forthe town judge) trusts the town judge.
 *  3. There is exactly one person that satisfiesproperties 1 and 2.
 * 
 * You are given an array trust where trust[i] = [ai, bi] representing that the person labeled 'ai' trusts the person
 * labeled bi. Return the label of the town judge if the town judge existsand can be identified, or return -1 otherwise.
 * 
 * Example 1:
 * Input: n = 2, trust = [[1,2]]
 * Output: 2
 * 
 * Example 2:
 * Input: n = 3, trust = [[1,3],[2,3]]
 * Output: 3
 * 
 * Example 3:
 * Input: n = 3, trust = [[1,3],[2,3],[3,1]]
 * Output: -1
 * 
 * Constraints:
 *  ●1 <= n <= 1000
 *  ●0 <= trust.length <= 104
 *  ●trust[i].length == 2
 *  ●All the pairs of trust are unique.
 *  ●ai != bi
 *  ●1 <= ai, bi <= n
 */

/* Solution */

const findJudge = function(n, trust) {
    let result = -1;
    if (trust.length === 0 && n >1) {
        return -1;
    }
    if (trust.length === 0) {
        return 1;
    }
    let trusts = new Array(n+1).fill(0);
    let isTrusted = new Array(n+1).fill(0);
    trust.forEach(t => {
        trusts[t[0]]++;
        isTrusted[t[1]]++;
    });
    for (let i = 0; i <= n; i++) {
        
        if (isTrusted[i] === n-1 && trusts[i] === 0) {
            result = i;
            break;
        }
    };
    return result;
};

console.log(findJudge(4, []));